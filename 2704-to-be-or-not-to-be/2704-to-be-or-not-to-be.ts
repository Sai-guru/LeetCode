const toBe = (a: number, b: number): true => {
    if (a === b) return true;
    throw new Error("Not Equal");
};

const notToBe = (a: number, b: number): true => {
    if (a !== b) return true;
    throw new Error("Equal");
};

const expect = (x: number) => {
    return {
        toBe: (y: number) => toBe(x, y),
        notToBe: (y: number) => notToBe(x, y)
    };
};
