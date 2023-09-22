<script>
    import { base } from "$app/paths";
    import Map from "$lib/components/Map.svelte";
    import Modal from "$lib/layout/Modal.svelte";

    let showModal = false;
</script>

<section class="header">
    <h1>
      Marking Country
    </h1>
    <h2>Mapping deep histories</h2>
    <p>Click icons to navigate.</p>
    <div class="map">
      <Map />
    </div>
  </section>

  <section class="content marking-country">
    <p>
      Every part of Australia has its deep history stories. This is a place
      where you can experience some of them, told from the perspectives and
      in the voices of the land's sovereign peoples, its Indigenous
      custodians. These are living histories that continue to be enacted,
      revived, performed and depicted on the lands and waterways of
      Australia today.
    </p>

    <div class="home-buttons">
      <button on:click={() => (showModal = true)}>Watch introduction</button>
      <button
        on:click={() => {
          goto(`${base}/about/`);
        }}
      >
      <Modal bind:showModal>
        <h2 slot="header">
          modal
        </h2>
      </Modal>
    </div>
  </section>

  <style>
    .header {
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 2rem 2rem 2rem 2rem;
  }

  h1 {
    font-size: 2.4rem;
    line-height: 2.4rem;
    margin-top: 2.4rem;
    margin-bottom: 0rem;

  }

  h2 {
    font-size: 1.6rem;
    line-height: 1.6rem;
    margin-top: 0rem;
    margin-bottom: 1.6rem;
  }

  .header p {
    font-size: 1rem;
    position: absolute;
    margin-top: -14px;

  }
    .map {
      margin: 0 auto;
      margin-top: 2.4rem;  
    }

    svg {
      margin: 0 auto;    
    }

    .marking-country {

padding: 1.6rem;

width: 100%;
    max-width: 800px;
    margin: 0 auto;
    }

.home-buttons {
  display: flex;
  flex-direction: column;
}

.home-buttons button:first-child {
    background-color: var(--color-terracotta);
    margin-right: 2rem;
    color: #ffffff;
  }

  .home-buttons button:last-child {
    background-color: var(--color-bg-light);
    color: var(--color-terracotta);
  }

  .home-buttons button:last-child:hover a {
    color: #ffffff;
  }
  
  button {
    font-family: 'Work Sans', Arial, Helvetica, sans-serif;
    width: 100%;
    border: 2px solid var(--color-terracotta);
    border-radius: 4px;
    margin: 1rem 0;
    padding: 1rem 2rem;
    font-size: 1rem;

  }
  button:hover {
      border: 2px solid var(--color-fg-dark);
      background-color: var(--color-fg-dark);
      color: #ffffff !important;
      cursor: pointer;
    }

@media (min-width: 600px) {
  .map {
    margin-top: 0;
  }
}

@media (min-width: 900px) {
  .header {
    padding: 0;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .header h1 {
    font-size: 2.4rem;
      line-height: 2.4rem;
      margin-bottom: 0
  }

  .header h2 {
    font-size: 1.6rem;
      line-height: 1.6rem;
      margin-bottom: -40px;
  }

 .header p {
    max-width: 200px;
      margin-top: 80px;
  }

  svg {
    max-height: 80vh;
  }

  .marking-country {
    padding: 0;
  }

  .home-buttons {
    flex-direction: row;
    justify-content: flex-start;
  }

  button {
    margin: 2rem 0;
  }
}

  </style>