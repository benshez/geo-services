export class LogLevel {
    //static readonly ALL: LogLevel = new LogLevel('ALL', Number.MIN_SAFE_INTEGER);
    static readonly DEBUG: LogLevel = new LogLevel('DEBUG', 700);
    static readonly INFO: LogLevel = new LogLevel('INFO', 800);
    static readonly WARN: LogLevel = new LogLevel('WARN', 900);
    static readonly ERROR: LogLevel = new LogLevel('ERROR', 1000);
    //static readonly OFF: LogLevel = new LogLevel('OFF', Number.MAX_SAFE_INTEGER);

    private constructor(private name: String, private value: number) { }
}