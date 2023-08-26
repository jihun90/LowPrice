export interface BaseResponse<T> {
    rCode: string;
    rMessage: string;
    data: T;
}

export function isBaseResponse<T>(arg: unknown): arg is BaseResponse<T> {
    return (arg as BaseResponse<T>).rCode !== undefined;
}

export interface SearchResults {
    landingUrl: string;
    productData: SearchProduct[];
}

export function isSearchResult(arg: unknown): arg is SearchResults {
    return (arg as SearchResults).landingUrl !== undefined;
}

export interface SearchProduct {
    keyword: string;
    rank?: number;
    isRocket: boolean;
    isFreeShipping: boolean;
    productId: number;
    productImage: string;
    productName: string;
    productPrice: number;
    productUrl: string;
}

export function isSearchProduct(arg: unknown): arg is SearchProduct {
    return (arg as SearchProduct).productUrl !== undefined;
}
