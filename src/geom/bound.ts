import { Coordinate } from '../internal';

export class Bound {

    public minX : number;
    public maxX : number;
    public minY : number;
    public maxY : number;

    public constructor(minX : number, maxX : number, minY : number, maxY : number) {
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
    }

    public getWest() {
        return this.minY;
    }

    public getNorth() {
        return this.maxY;
    }

    public getSouth() {
        return this.minX;
    }

    public getEast() {
        return this.maxX;
    }

    public getSouthWest(){
        return new Coordinate(this.getSouth(),this.getWest() ); 
    }

    public getNorthEast() {
        return new Coordinate(this.getNorth(),this.getEast() );
    }

    public getNorthWest(){
        return new Coordinate(this.getNorth(),this.getWest() ); 
    }

    public getSouthEast() {
        return new Coordinate(this.getSouth(),this.getEast() );
    }
}