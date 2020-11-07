<script>
    export let heading;
    export let content;
</script>

<section class="content">
    <h2>{heading}</h2>
    <p>{content}</p>

    <div class="stuff">
        <h3>Why do you edit my content.. I have no idea what type..</h3>
        <label>
            Heading
            <input type="text" bind:value={heading}>
        </label>
        <label>
            Content
            <textarea bind:value={content}></textarea>
        </label>
    </div>
</section>


<style lang="scss">
    .content {
        max-width: 968px;
        margin: 0 auto;
        padding: 40px 20px;
        @media (min-width: 1024px) {
            padding: 60px 0;
        }

        .stuff {
            padding-top: 50px;
        }
    }
</style>