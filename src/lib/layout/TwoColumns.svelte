<div class="wrapper">
    <div class="container">
        <div class="column1">
            <slot name="column1" />
        </div>
        <div class="column2">
            <slot name="column2" />
        </div>
    </div>
</div>

<style>
    .wrapper {
        padding: 2.4rem;
    }
    .container {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1200px) {

        .wrapper {
            padding: 0;
            max-width: 1024px;
            margin: 4rem auto;
        }
        .container {
            flex-direction: row;
        }
        .column1 {
            max-width: 400px;
        }
        .column2{
            max-width: 50%;
        }
    }
</style>