export class AppRoutes {
    static readonly LOGIN: string           = 'login';
    static readonly REGISTER: string        = 'register';
    static readonly FORGOT_PASSWORD: string = 'forgot-password';
    static readonly PAGE_404: string        = 'page-404';
    static readonly MAIN_BOARD: string      = 'main-board';

    static readonly _HOME: string  = 'home';
    static readonly _STATS: string = 'stats';
    static readonly _TEAM: string  = 'team';

    /**
     * Convert Routes for redirecting
     *
     * @param {string} paths
     * @returns {string}
     */
    static fromRoot(...paths: string[]): string {
        return paths.reduce(
            (acc, path) => acc + '/' + path,
            '',
        );
    }
}
