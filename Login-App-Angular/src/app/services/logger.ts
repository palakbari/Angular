export class BaseLogger
{
    log(){}
}

export class ConsoleLogger extends BaseLogger
{
    count : number = 0;
    override log() : void
    {
        this.count = this.count+1;
        console.log("Using Console Logger count value = "+this.count);
    }
}

export class FileLogger extends BaseLogger
{
    override log() : void
    {
        console.log("Using FileLogger");
    }
}

export class DBLogger extends BaseLogger
{
    override log() : void
    {
        console.log("Using DBLogger");
    }
}

