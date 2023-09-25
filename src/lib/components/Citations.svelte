<script>
    export let citations, location, page;

    import { onMount } from "svelte";

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const day = today.getDate();

    const initialButtonState = "Copy";
    const [buttonText, setButtonText] = useState(initialButtonState);
    const [authors, setAuthors] = useState(citations[0].authors);
    const [date, setDate] = useState(`${day} ${month} ${year}`);

    let copyCitation;
    let handleOptionChange;

    onMount(() => {
        copyCitation = () => {
        let text = document.getElementById('citation');

        try {
            text.focus();
            document.execCommand("selectAll");
            document.execCommand("copy");
            setButtonText(`Copied!`);
            setTimeout(() => setButtonText(initialButtonState), [1000]);

        } catch {
            setButtonText(`Failed to copy!`);
            setTimeout(() => setButtonText(initialButtonState), [1000]);
        }

    }

    handleOptionChange = (id) => {
        setAuthors(citations[id].authors);
        setDate(`${day} ${month} ${year}`)
    };
    })



</script>

<div class="options">
    {#each citations as insert}
        <label key={insert} for={insert}>
            <input
                type="radio"
                bind:value={insert}
                id={insert}
                name="citation"
                checked={insert ? true : false}
                onChange={() => handleOptionChange(insert)}
            /> To cite {`${insert}`}
        </label>
    {/each}
</div>

<div id="citationBox" class="text">
    <p id="citation" contentEditable="true" suppressContentEditableWarning={true}>{authors}, '{page}', <em>Marking Country</em>, Research Centre for Deep History, Australian National University, {`${location.origin}${location.pathname}`} accessed online {date}. </p>

    <div>
        <button
            on:click={copyCitation}
        >{buttonText} <svg version="1.1" height="20px" width="16px" x="0px" y="0px" viewBox="0 0 111.26 122.88" xmlSpace="preserve"><g><path d="M21.78,62.8c-1.61,0-2.91-1.43-2.91-3.19c0-1.76,1.3-3.19,2.91-3.19h24.91c1.61,0,2.91,1.43,2.91,3.19 c0,1.76-1.3,3.19-2.91,3.19H21.78L21.78,62.8z M93.37,19.34h10.43c2.05,0,3.92,0.84,5.27,2.19c1.35,1.35,2.19,3.22,2.19,5.27v88.62 c0,2.06-0.84,3.92-2.19,5.27c-1.35,1.35-3.22,2.19-5.27,2.19H25.35c-2.05,0-3.92-0.84-5.27-2.19c-1.35-1.35-2.19-3.21-2.19-5.27 v-11.88H7.46c-2.05,0-3.92-0.84-5.27-2.19C0.84,100,0,98.13,0,96.08V7.46C0,5.4,0.84,3.54,2.19,2.19C3.54,0.84,5.4,0,7.46,0h78.45 c2.05,0,3.92,0.84,5.27,2.19c1.35,1.35,2.19,3.22,2.19,5.27V19.34L93.37,19.34z M24.28,103.54v11.88c0,0.29,0.12,0.56,0.32,0.75 c0.2,0.2,0.46,0.32,0.75,0.32h78.45c0.29,0,0.56-0.12,0.75-0.32c0.2-0.2,0.32-0.46,0.32-0.75V26.8c0-0.29-0.12-0.56-0.32-0.75 c-0.2-0.2-0.46-0.32-0.75-0.32H93.37v70.34c0,2.05-0.84,3.92-2.19,5.27c-1.35,1.35-3.22,2.19-5.27,2.19H24.28L24.28,103.54z M85.91,6.39H7.46c-0.29,0-0.56,0.12-0.75,0.32c-0.2,0.2-0.32,0.46-0.32,0.75v88.62c0,0.29,0.12,0.56,0.32,0.75 c0.2,0.2,0.46,0.32,0.75,0.32h78.45c0.29,0,0.56-0.12,0.75-0.32c0.2-0.2,0.32-0.46,0.32-0.75V7.46c0-0.29-0.12-0.56-0.32-0.75 C86.47,6.51,86.2,6.39,85.91,6.39L85.91,6.39z M21.78,28.64c-1.61,0-2.91-1.43-2.91-3.19c0-1.76,1.3-3.19,2.91-3.19h49.81 c1.61,0,2.91,1.43,2.91,3.19c0,1.76-1.3,3.19-2.91,3.19H21.78L21.78,28.64z M21.78,45.72c-1.61,0-2.91-1.43-2.91-3.19 c0-1.76,1.3-3.19,2.91-3.19h49.81c1.61,0,2.91,1.43,2.91,3.19c0,1.76-1.3,3.19-2.91,3.19H21.78L21.78,45.72z" /></g></svg></button>

    </div>

</div>