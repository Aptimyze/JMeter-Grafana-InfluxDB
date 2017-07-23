/**
 * Calculate tick step.
 * Implementation from d3-array (ticks.js)
 * https://github.com/d3/d3-array/blob/master/src/ticks.js
 * @param start Start value
 * @param stop End value
 * @param count Ticks count
 */
export declare function tickStep(start: number, stop: number, count: number): number;
export declare function getScaledDecimals(decimals: any, tick_size: any): number;
/**
 * Calculate tick size based on min and max values, number of ticks and precision.
 * @param min           Axis minimum
 * @param max           Axis maximum
 * @param noTicks       Number of ticks
 * @param tickDecimals  Tick decimal precision
 */
export declare function getFlotTickSize(min: number, max: number, noTicks: number, tickDecimals: number): any;
