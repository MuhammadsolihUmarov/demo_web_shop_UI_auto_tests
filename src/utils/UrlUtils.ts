import { Page } from '@playwright/test';
export const BASE_URL = 'https://demowebshop.tricentis.com';
export const getFullUrl = (path: string): string => `${BASE_URL}${path}`;