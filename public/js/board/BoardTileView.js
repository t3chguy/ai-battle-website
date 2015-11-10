/* globals Backbone,gameAssets */
/* exported BoardTileView */
var BoardTileView = Backbone.View.extend({
  tagName: 'div',
  className: 'battle-tile',
  initialize: function (config) {
    this.tile = config.tile;
    this.render();
  },
  render: function() {
    var tile = this.tile,
        subType = tile.subType,
        type = tile.type,
        html,
        colors,
        owner;

    if (subType !== 'Unoccupied') {
      html = '<img src="' + gameAssets[subType] + '" class="sprite">';
      colors = {
        0: 'team-yellow',
        1: 'team-blue'
      };

      if (type === 'Hero') {
        html = this.buildHeroHtml(tile, colors);
      } else if (type === 'DiamondMine') {
        owner = tile.owner;
        if (owner) {
          html += '<span class="indicator ' + colors[owner.team] +'">' + owner.id + '</span>';
        }
      }

      this.$el.html(html);
    }
  },
  buildHeroHtml: function (tile, colors) {
    var name = tile.name,
        heroId = tile.id,
        HP = tile.health,
        gameTurn = tile.gameTurn,
        lastActiveTurn = tile.lastActiveTurn,
        subType = tile.subType,
        html = '';

    if (lastActiveTurn === (gameTurn - 1) && gameTurn !== 1) {
      this.$('.sprite').addClass('current-turn');
    }

    html = '<img src="' + gameAssets[subType] + '" id="H' + heroId +'" class="sprite">';
    html += '<span class="indicator ' + colors[tile.team] +'">' + heroId + '</span>';
    html += '<span class="lifebar"><span class="life-capacity" style="height:' + HP + '%"></span></span>';

    this.$el.addClass('current-user-' + name);

    return html;
  }
});