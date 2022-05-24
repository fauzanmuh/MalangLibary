@extends('layouts.app')

@section('css')
    <link rel="stylesheet" href="/css/style.css">
@endsection

<body>
    <div id="app">
        <div id="content">
            @yield('navbar')
            @yield('content')
        </div>
    </div>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="inner-content">
                        <p>Copyright &copy; 2022 Malang Library / TI-3G</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
