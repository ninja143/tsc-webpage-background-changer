class RandomRGB {
    private randomInteger(max: number): number {
        return Math.floor(Math.random()*(255 + 1));
    }

    private randomRGBColor(): number[] {
        let r = this.randomInteger(255);
        let g = this.randomInteger(255);
        let b = this.randomInteger(255);
        return [r, g, b];
    }

    public randomHexColor(): string {
        const [r, g, b]: number[] = this.randomRGBColor()
        let hr = r.toString(16).padStart(2, '0');
        let hg = g.toString(16).padStart(2, '0');
        let hb = b.toString(16).padStart(2, '0');   
        return "#" + hr + hg + hb;
    }
}


export { RandomRGB };