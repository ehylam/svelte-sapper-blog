<script>
    import { onMount } from 'svelte';
    // import * as THREE from 'three';
    import gsap from 'gsap';
    // import hero from '../../static/images/vender.jpg';

    export let title = "Eric's Thing"; //Default if no title value is being passed
    let textArr = title.split("");
    let i = 0;
    let titleChanged = false;
    const heroTitle = gsap.timeline();

    // $: { textArr = title.split(""); splitText(textArr); heroTitle.reversed() ? heroTitle.play() : heroTitle.reverse(); }


    onMount(() => {
        // Can be simplifed by setInterval/setTimeOut instead of
        // using GSAP.
        heroTitle.to('.hero_block h1 span', {
            duration: 1.2,
            stagger: 0.05,
            opacity: '1',
            delay: 0.5,
            // onComplete: function() {if(!titleChanged) {title = 'Hold up now.'; console.log(title)} else { titleChanged = true;}}
        });
        splitText(textArr);



    });

    function splitText(textArray) {
        textArray.forEach(letter => {
            if(letter.indexOf(' ') >= 0) {
                textArr[i] = null;
            }
            i++;
        });
    }



</script>

<section class="hero">
    <div class="hero_block">
        <h1>
            {#each textArr as letter}
                {#if letter == null}
                    <span class="whitespace"></span>
                {:else}
                    <span>{letter}</span>
                {/if}
            {/each}
        </h1>
    </div>
</section>

<style lang="scss">
.hero {
    height: calc(100vh - 82px);
    display: flex;
    justify-content: center;
    align-items: center;

    &_block {
        h1 {
            margin-bottom: 0;
            overflow: hidden;
            span {
                opacity: 0;
                font-size: 8vw;
                display: inline-block;
                position: relative;
                &.whitespace {
                    width: 2vw;
                }
            }
        }
    }
}

</style>