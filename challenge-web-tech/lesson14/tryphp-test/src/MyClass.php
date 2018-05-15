<?php
class MyClass {
    public function power($x, $y)
    {
        return pow($x, $y);
    }
    public function fib($n)
    {
        if($n < 1)
            return;
        $x = 1;
        $y = 1;
        $index = 2;
        while($index < $n)
        {
            $z = $y + $x;
            $x = $y;
            $y = $z;
            $index++;
        }
        return $y;
    }
}

