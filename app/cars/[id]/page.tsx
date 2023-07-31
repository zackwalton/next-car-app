interface Props {  // this is how you get the parameters in the url (for the dynamic route with [id])
    params: {
        id: string
    }
}

export default async function CarPage({ params }: Props) {

    // const response = await fetch(`https://our-database-or-whatever.com/yeah`)
    return (
        <main>
            {/*THIS IS THE CAR-SPECIFIC PAGE*/}
            <p>This is the car-specific page</p>
            <p>The id of the car you navigated { params.id }</p>
        </main>
    )
}
