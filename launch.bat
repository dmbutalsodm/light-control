@echo off
title Light control

:beginning

echo Available commands:
echo 1. allWhite: Turns all the lights to white.
echo 2. brightness: Changes the brightness of all 3 lights.
echo 3. randomColors: Turns all the lights random colours.
echo 4. toggle: Turns all the lights on or off.
echo.
SET /P N="What # command would you like to run? Or type exit. "

goto :command-%N%

    :command-exit
        EXIT /B

    :command-1
        node .\functions\allWhite.js
        goto :command-end

    :command-2
        echo.
        SET /P brightness="What brightness level? Pick a number between 0 and 255. "
        node .\functions\brightness %brightness%
        goto :command-end

    :command-3
        node .\functions\randomColors.js
        goto :command-end


    :command-4
        node .\functions\toggle.js
        goto :command-end

    :command-end
    cls
    goto :beginning ::very efficient i know
