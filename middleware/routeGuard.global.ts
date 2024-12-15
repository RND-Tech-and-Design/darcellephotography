// middleware/redirects.js

export default defineNuxtRouteMiddleware((to) => {
    // Initialize the redirects map once for constant-time lookup
    const redirects = new Map([

        //PAGES
        ['/services', '/individualTherapy'],
       
    ]);


    
    const originalPath = to.path;
    const lastSlashIndex = originalPath.lastIndexOf('/');

    // Replace the last occurrence of '/' if it exists
    const newPath = lastSlashIndex !== -1
        ? originalPath.substring(0, lastSlashIndex) + originalPath.substring(lastSlashIndex + 1)
        : originalPath;

    const redirect = redirects.get(newPath) || redirects.get(originalPath) ;

    if (redirect) {
        return navigateTo(redirect, { redirectCode: 301 });
    }
});
