import { Component, Evt } from 'strudel';

@Component('.test')
class Test {
    @Evt('click')
    dupa() {

    }

    @Evt('click .dupa')
    asdf() {

    }

    @Evt('.click .dupa', true)
    dddd() {
        
    }

    @Evt('.click .dupa > .cos > .super', true)
    dddsdad() {
        
    }
}