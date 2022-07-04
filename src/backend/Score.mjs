export class Score {
    points;
    level;
    obserevrs;
    constructor() {
        this.points = 0;
        this.rows = 0;
        this.level = 0;
        this.observers = {};
    }

    reset() {
        this.points = 0;
        this.rows = 0;
        this.level = 0;
        this.signalLevelChanged(0);
        this.signalScoreChanged(0);
    }

    rowsCleared(rows) {
        switch (rows) {
            case 1:
                this.points += 40 * (this.level + 1);
                break;
            case 2:
                this.points += 100 * (this.level + 1);
                break;
            case 3:
                this.points += 300 * (this.level + 1);
                break;
            case 4:
                this.points += 1200 * (this.level + 1);
                break;
        }
        this.rows += rows;
        const level = Math.floor(this.rows * 0.1);
        if (level < 4 && this.level !== level) {
            this.level = level;
            this.signalLevelChanged(level);
        }
        this.signalScoreChanged(this.points);
    }

    getScore() {
        return this.points;
    }



    addObserver(type, object) {
        if (!this.observers) {
            this.observers = {};
        }
        if (!this.observers[type]) {
            this.observers[type] = [object];
        } else {
            this.observers[type].push(object);
        }
    }

    signalScoreChanged(points) {
        let obs = this.observers.scorechanged;
        if (!obs) { return }
        for (let i = 0; i < obs.length; i++) {
            obs[i].scoreChanged(points);
        }
    }
    signalLevelChanged(level) {
        let obs = this.observers.scorechanged;
        if (!obs) { return }
        for (let i = 0; i < obs.length; i++) {
            obs[i].levelChanged(level);
        }
    }
}