<!-- Webpage Icon -->

<link rel='shortcut icon' href='./images/favicon.ico' type='image/x-icon'/ >

<!-- Webpage Icon End -->

<!-- Bootstrap -->

<link href="./app/libraries/bootstrap-3.3.5/css/bootstrap.min.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="./app/libraries/bootstrap-3.3.5/js/bootstrap.js"></script>

<!-- Bootstrap End -->

<!-- AngularJS -->

<!-- 1. Load libraries -->

<!-- Load libraries -->
<!-- IE required polyfills, in this exact order -->
<script src="./app/node_modules/es6-shim/es6-shim.min.js"></script>
<script src="./app/node_modules/systemjs/dist/system-polyfills.js"></script>

<script src="./app/node_modules/angular2/bundles/angular2-polyfills.js"></script>
<script src="./app/node_modules/systemjs/dist/system.src.js"></script>
<script src="./app/node_modules/rxjs/bundles/Rx.js"></script>
<script src="./app/node_modules/angular2/bundles/angular2.dev.js"></script>

<base href="/">
<script src="./app/node_modules/angular2/bundles/router.dev.js"></script>

<script src="https://code.angularjs.org/2.0.0-beta.1/http.js"></script>

<!-- 2. Configure SystemJS -->
<script>
  System.config({
    packages: {
      app: {
        format: 'register',
        defaultExtension: 'js'
      }
    }
  });
  System.import('app/ts/ts-build/main').then(null, console.error.bind(console));
</script>

<!-- AngularJS End -->
