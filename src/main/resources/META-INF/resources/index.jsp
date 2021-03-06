<html>
    <head>
        <title>Angular 2 QuickStart</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/styles.css">
        <!-- 1. Load libraries -->
        <script src="js/node_modules/core-js/client/shim.min.js"></script>
        <script src="js/node_modules/zone.js/dist/zone.js"></script>
        <script src="js/node_modules/reflect-metadata/Reflect.js"></script>
        <script src="js/node_modules/systemjs/dist/system.src.js"></script>
        <!-- 2. Configure SystemJS -->
        <script src="js/systemjs.config.js"></script>
        <script>
                System.import('app').catch(function(err){ console.error(err); });
        </script>
    </head>
    <!-- 3. Display the application -->
    <body>
        <my-app>Loading...</my-app>
        <cesium>Loading cesium...</cesium>

        <script src="js/node_modules/cesium/Build/Cesium/Cesium.js"></script>
    </body>
</html>
