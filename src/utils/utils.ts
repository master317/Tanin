class Utils{
    loadScript(url: string) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.body.appendChild(script);
      }
}

export default new Utils();