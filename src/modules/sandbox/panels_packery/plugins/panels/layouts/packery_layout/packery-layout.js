/**
 * @file
 * Custom scripts for theme.
 */

(function (window, document, $, undefined) {

Drupal.behaviors.panelsPackery = {
  attach: function (context, settings) {
    $.each(settings.packery || {}, function (selector, config) {
      $(selector, context).each(initializePackery(config));
    });
  }
};

/**
 * Packery initializer factory.
 */
function initializePackery(config) {
  return function () {
    var $container = $(this);
    var $items = $container.find(config.itemSelector)

    $container.packery({
      itemSelector: config.itemSelector,
      columnWidth: config.itemSelector,
      percentPosition: true
    })
  };
}

})(window, document, jQuery);
