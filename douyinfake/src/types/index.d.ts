/**
 *
 */
export interface Action {
    type: string;
    payload: any;
}

/**
 *
 */
export interface IPage<T> {
    success: boolean;
    error: any;
    data: Array<T>;
    code: number;
}

/**
 *
 */
export interface IPageRequest {
    start: number;
    end: number;
}