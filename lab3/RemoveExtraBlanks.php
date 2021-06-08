<?php
header("Content-Type: text/plain");

function getGETParameter(string $param): ?string
{
    return isset($_GET[$param]) ? $_GET[$param] : null;
}

$text = getGETParameter('text');

if ($text)
{
    $checkString = trim($text);
    $resultString = "";
    $spaceFlag = false;
    
    for ($i = 0; $i < strlen($checkString); $i++)
    {
        $char = $checkString[$i];
        if ($char != " ")
        {
            if ($spaceFlag)
            {
                $resultString = $resultString . " ";
            }
            $resultString = $resultString . $char;
            $spaceFlag = false;
        }
        else
        {
            $spaceFlag = true;
        }
    }
    
    echo $resultString;
}
else
{
    echo "Введите параметр!";
}