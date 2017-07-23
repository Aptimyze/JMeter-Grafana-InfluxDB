/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class CollapseBoxCtrl {
    private $timeout;
    isOpen: boolean;
    stateChanged: () => void;
    /** @ngInject **/
    constructor($timeout: any);
    toggle(): void;
}
export declare function collapseBox(): {
    restrict: string;
    template: string;
    controller: typeof CollapseBoxCtrl;
    bindToController: boolean;
    controllerAs: string;
    scope: {
        "title": string;
        "isOpen": string;
        "stateChanged": string;
    };
    transclude: {
        'actions': string;
        'body': string;
    };
    link: (scope: any, elem: any, attrs: any) => void;
};
