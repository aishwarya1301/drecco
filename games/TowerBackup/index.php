<!DOCTYPE html>
<html>
<head>
    <?php $base = "../../" ?>
    <base href="../../">
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/facebox.js"></script>
    <script src="js/gameSettings.js"></script>
    <link rel="stylesheet" type="text/css" href="css/facebox.css"/>
    <link rel="stylesheet" type="text/css" href="css/main.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="components/App/App.css"/>
    <link rel="stylesheet" type="text/css" href="components/Ball/Ball.css"/>
    <link rel="stylesheet" type="text/css" href="components/Button/Button.css"/>
    <link rel="stylesheet" type="text/css" href="components/Configurator/Configurator.css"/>
    <link rel="stylesheet" type="text/css" href="components/Sidebar/Sidebar.css"/>
    <link rel="stylesheet" type="text/css" href="components/Template/Template.css"/>
    <link rel="stylesheet" type="text/css" href="components/TestTube/TestTube.css"/>
    <link rel="stylesheet" type="text/css" href="components/TestTubes/TestTubes.css"/>
    <link rel="stylesheet" type="text/css" href="index.css"/>



    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $('a[rel*=facebox]').facebox()
        })
    </script>
</head>
<body>
<div class="container">
    <?php include $base."header.php"; ?>
    <nav>
        <ul>
        <li><a href="">Home</a></li>
<!--            <li><a href="games/empty">Empty Template</a></li>-->
        </ul>
        <?php include $base."leftMenuGame.php"; ?>

    </nav>
    <article>
        <h1 id="gameName">Tower</h1>
        <h3 id="groupName">1.5x</h3>
        <h3>Instruction:</h3>
        <div class="jumbotron">
            <p> Fill in  </p>
        </div>

        <h3>Leaderboard:</h3>
        <div id="scoreArea", class="jumbotron">
            <?php
            include $base."getScore.php";
            /*
            * arg1: gameName, should be the same as the dir name
            * arg2: if your score is sortable, pass 1 if higher score is better, 0
            *       if smaller score is better. Otherwise no need to pass variable
            */
            getScore("NoTipping");
            ?>
        </div>
        <h3>Play game in pop up window:<h3>
        <form id="gameSettings" class="well"></form>
        <h4>Screenshot:</h4>
        <img src="./games/NoTipping/NoTipping.png" width="100%" heigth="100%"></img>
    </article>
    <?php include $base."footer.php"; ?>
</div>
<script type="text/javascript">
    newWindowBtn(1000,1000,"./games/Tower/game.html",[]);
</script>
</body>
</html>
