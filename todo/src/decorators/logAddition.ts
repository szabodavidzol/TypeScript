export function logAddition(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Új teendő hozzáadása folyamatban: ${propertyKey}`);
        const result = originalMethod.apply(this, args);
        console.log(`A teendő sikeresen hozzáadva.`);
        return result;
    };
    return descriptor;
}