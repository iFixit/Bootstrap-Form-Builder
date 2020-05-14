define([
       "jquery", "underscore", "backbone"
      , "views/temp-snippet"
      , "helper/pubsub"
      , "text!templates/app/renderform.html"
], function(
  $, _, Backbone
  , TempSnippetView
  , PubSub
  , _renderForm
){
  return Backbone.View.extend({
    tagName: "fieldset"
    , initialize: function(){
      this.model.snippets.on("add", this.render, this);
      this.model.snippets.on("remove", this.render, this);
      this.model.snippets.on("change", this.render, this);
      this.model.snippets.on("reset", this.render, this);
      this.model.snippets.on("change", this.model.snippets.sync);
      PubSub.on("mySnippetDrag", this.handleSnippetDrag, this);
      PubSub.on("tempMove", this.handleTempMove, this);
      PubSub.on("tempDrop", this.handleTempDrop, this);
      this.$build = $("#build");
      this.renderForm = _.template(_renderForm);
      this.render();
    }

    , render: function(){
      //Render Snippet Views
      this.$el.empty();
      var that = this;
      _.each(this.model.snippets.renderAll(), function(snippet){
        that.$el.append(snippet);
      });
      $("#render").val(that.renderForm({
        text: _.map(this.model.snippets.renderAllClean(), function(e){return e.html()}).join("\n")
      }));
      this.$el.appendTo("#build form");
      this.delegateEvents();
    }

    , getBottomAbove: function(eventY){
      var myFormBits = $(this.$el.find(".component"));
      // 30 is an arbitrary pixel offset that experimentally felt right.
      var cursorY = eventY - 30;

      // If cursor is above the top snippet, there are no snippets to drop it under.
      if (cursorY < $(myFormBits[0]).offset().top) {
         return null;
      }

      var topelement = _.find(myFormBits, function(renderedSnippet) {
        var bottomOffset = $(renderedSnippet).offset().top + $(renderedSnippet).height();

        if (bottomOffset > cursorY) {
          return true;
        }
        else {
          return false;
        }
      });
      if (topelement){
        return topelement;
      } else {
        return null;
      }
    }

    , handleSnippetDrag: function(mouseEvent, snippetModel) {
      $("body").append(new TempSnippetView({model: snippetModel}).render());
      this.model.snippets.remove(snippetModel);
      PubSub.trigger("newTempPostRender", mouseEvent);
    }

    , handleTempMove: function(mouseEvent){
      $(".target").removeClass("target");
      if(mouseEvent.pageX >= this.$build.offset().left &&
          mouseEvent.pageX < (this.$build.width() + this.$build.offset().left) &&
          mouseEvent.pageY >= this.$build.offset().top &&
          mouseEvent.pageY < (this.$build.height() + this.$build.offset().top)){
        var snippet = this.getBottomAbove(mouseEvent.pageY);
        if (snippet) {
          $(snippet).addClass("target");
        }
      } else {
        $(".target").removeClass("target");
      }
    }

    , handleTempDrop: function(mouseEvent, model, index){
      if(mouseEvent.pageX >= this.$build.offset().left &&
         mouseEvent.pageX < (this.$build.width() + this.$build.offset().left) &&
         mouseEvent.pageY >= this.$build.offset().top &&
         mouseEvent.pageY < (this.$build.height() + this.$build.offset().top)) {
        // If no target, drop the snippet in the topmost position.
        var target = $(".target");
        var index = target ? target.index() : -1;

        $(".target").removeClass("target");
        this.model.snippets.add(model,{at: index+1});
      } else {
        $(".target").removeClass("target");
      }
    }
  })
});
