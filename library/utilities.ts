export const logVariables = (name: string, variables: unknown[]) => {
    console.log('------------');
    console.log(name);
    console.log('------------');
    variables.forEach((variable, index) => {
        console.log(`${index}:`, variable);
    });
    console.log('------------');
};
