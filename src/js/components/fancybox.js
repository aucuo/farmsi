import {closeSegmentedControl, showSegmentedControl} from "@/js/components/segmentedControl";

var fancybox = Fancybox.bind("[data-fancybox]", {
    Toolbar: {
        display: {
            left: ["infobar"],
            right: ["close"],
        },
    },
    Thumbs: {
        type: "classic",
    },
    contentClick: "iterateZoom",
    Images: {
        initialSize: "fit",
        Panzoom: {
            maxScale: 2,
        },
    },
    Carousel: {
        Navigation: false,
    },
    on: {
        init: (fancybox, slide) => {
            showSegmentedControl(fancybox);
        },
        close: (fancybox, slide) => {
            closeSegmentedControl(fancybox);
        },
    },
    touch: false
});