import Constants from './Constants'
import {EventEmitter} from 'events';
import { cwd } from 'process';

export default class EventStore extends EventEmitter{
    addChangeListener(callback){
        this.on(Constants.CHANGE_EVENT,callback)
    }
    removeChangeListener(callback){
        this.removeListener(Constants.CHANGE_EVENT,callback)
    }
    emitChange(){
        this.emit(Constants.CHANGE_EVENT)
    }
}
