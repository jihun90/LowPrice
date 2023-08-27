export interface SearchProductRequest {
    keyword: string;
    limit?: number;
    subId?: string;
    imageSize?: string;
    srqLinkOnly?: boolean;
}

export interface DeepLinkBody {
    coupangUrls: string[]; //max 20
    subId?: string;
}
