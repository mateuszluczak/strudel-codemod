import { Component, Evt } from 'strudel';

@Component('.test')
class Test {
    @Evt('click')
    method1() { }

    @Evt('click selector')
    method2() { }

    @Evt('.click > .longer-selector', true)
    method3() { }
}