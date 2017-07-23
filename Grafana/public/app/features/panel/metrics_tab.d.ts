/// <reference path="../../../../public/app/headers/common.d.ts" />
import { DashboardModel } from '../dashboard/model';
export declare class MetricsTabCtrl {
    private uiSegmentSrv;
    private datasourceSrv;
    dsName: string;
    panel: any;
    panelCtrl: any;
    datasources: any[];
    current: any;
    nextRefId: string;
    dashboard: DashboardModel;
    panelDsValue: any;
    addQueryDropdown: any;
    /** @ngInject */
    constructor($scope: any, uiSegmentSrv: any, datasourceSrv: any);
    getOptions(includeBuiltin: any): Promise<{
        value: any;
        text: any;
        datasource: any;
    }[]>;
    datasourceChanged(option: any): void;
    addMixedQuery(option: any): void;
    addQuery(): void;
}
/** @ngInject **/
export declare function metricsTabDirective(): {
    restrict: string;
    scope: boolean;
    templateUrl: string;
    controller: typeof MetricsTabCtrl;
};
