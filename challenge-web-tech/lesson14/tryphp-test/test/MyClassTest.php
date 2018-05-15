<?php
use PHPUnit\Framework\TestCase;

class MyClassTest extends TestCase {
   /** 
    * @dataProvider providerPower 
    */
    public function testPower($a, $b, $c)
    {
        $my = new MyClass();
        $this->assertEquals($c, $my->power($a, $b)); 
    }

    public function providerPower ()
    {
        return array (
            array (2, 2, 4), 
            array (2, 3, 8), 
            array (3, 5, 243)
        ); 
    }

   /** 
    * @dataProvider providerFib 
    */
    public function testFib($n, $v)
    {
        $my = new MyClass();
        $this->assertEquals($v, $my->fib($n)); 
    }

    public function providerFib ()
    {
        return array (
            array (1, 1), 
            array (5, 5), 
            array (6, 8), 
            array (7, 13)
        ); 
    }
}
