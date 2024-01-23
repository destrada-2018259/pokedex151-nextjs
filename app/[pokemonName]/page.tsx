

export default async function PokemonPage({ params }: {params: { pokemonName: string }}){
    const {pokemonName} = params;

    return(
        <>
            <h1 className="text-4x1 text-bold pt-4"> Pikachu </h1>
        </>
    )
}