/// <reference path="../../../../public/app/headers/common.d.ts" />
import { JsonExplorer } from 'app/core/core';
export declare class QueryTroubleshooterCtrl {
    private $timeout;
    isOpen: any;
    isLoading: boolean;
    showResponse: boolean;
    panelCtrl: any;
    renderJsonExplorer: (data) => void;
    onRequestErrorEventListener: any;
    onRequestResponseEventListener: any;
    hasError: boolean;
    allNodesExpanded: boolean;
    jsonExplorer: JsonExplorer;
    /** @ngInject **/
    constructor($scope: any, $timeout: any);
    removeEventsListeners(): void;
    onRequestError(err: any): void;
    stateChanged(): void;
    getClipboardText(): string;
    onRequestResponse(data: any): void;
    toggleExpand(depth: any): void;
}
export declare function queryTroubleshooter(): {
    restrict: string;
    template: string;
    controller: typeof QueryTroubleshooterCtrl;
    bindToController: boolean;
    controllerAs: string;
    scope: {
        panelCtrl: string;
    };
    link: (scope: any, elem: any, attrs: any, ctrl: any) => void;
};
