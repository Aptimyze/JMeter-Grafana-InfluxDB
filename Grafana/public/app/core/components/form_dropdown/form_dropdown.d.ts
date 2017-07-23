/// <reference path="../../../../../public/app/headers/common.d.ts" />
export declare class FormDropdownCtrl {
    private $scope;
    private $sce;
    private templateSrv;
    private $q;
    inputElement: any;
    linkElement: any;
    model: any;
    display: any;
    text: any;
    options: any;
    cssClass: any;
    cssClasses: any;
    allowCustom: any;
    labelMode: boolean;
    linkMode: boolean;
    cancelBlur: any;
    onChange: any;
    getOptions: any;
    optionCache: any;
    lookupText: boolean;
    /** @ngInject **/
    constructor($scope: any, $element: any, $sce: any, templateSrv: any, $q: any);
    getOptionsInternal(query: any): any;
    isPromiseLike(obj: any): boolean;
    modelChanged(): void;
    typeaheadSource(query: any, callback: any): void;
    typeaheadUpdater(text: any): any;
    switchToLink(fromClick: any): void;
    inputBlur(): void;
    updateValue(text: any): void;
    updateDisplay(text: any): void;
    open(): void;
}
export declare function formDropdownDirective(): {
    restrict: string;
    template: string;
    controller: typeof FormDropdownCtrl;
    bindToController: boolean;
    controllerAs: string;
    scope: {
        model: string;
        getOptions: string;
        onChange: string;
        cssClass: string;
        allowCustom: string;
        labelMode: string;
        lookupText: string;
    };
};
