export namespace NormandyMigrations {
    function applyAll(): Promise<void>;
    function applyOne(id: any): Promise<void>;
    let migrations: any[];
}
