<?php
header("Content-Type: text/plain");

function getGETParameter(string $param): ?string
{
    return isset($_GET[$param]) ? $_GET[$param] : null;
}

$identifier = getGETParameter('identifier');

if($identifier)
{
    if(ctype_digit($identifier[0]))
    {
        echo "идентификатор должен начинаться с буквы!";
    }
    else 
    {
        if (ctype_alnum($identifier))
        {
            echo "да, корректный идентификатор";
        }
        else
        {
            echo "идентификатор должен содержать только буквы и цифры!";
        }
    }  
}
else
{
    echo "введите идентификатор";
}
