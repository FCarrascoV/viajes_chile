document.addEventListener('DOMContentLoaded', function () {
    // Inicializa todos los tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        var tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
        // Añade clases personalizadas al tooltip
        tooltipTriggerEl.addEventListener('shown.bs.tooltip', function () {
            var tooltipElement = document.querySelector('.tooltip');
            tooltipElement.classList.add('bg-info', 'text-white');
        });
        return tooltip;
    });

    // Inicializa todos los popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        var popover = new bootstrap.Popover(popoverTriggerEl);
        // Añade clases personalizadas al popover
        popoverTriggerEl.addEventListener('shown.bs.popover', function () {
            var popoverElement = document.querySelector('.popover');
            popoverElement.classList.add('bg-dark', 'text-white');
        });
        return popover;
    });
});
