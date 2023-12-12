<script lang="ts">
    export let checked: undefined | null | boolean = false;
    export let id = "";
    export let rotated = false;
</script>

<div class="switch">
    <input bind:checked id={id} role="switch" type="checkbox"/>
    <span class="slider" class:rotated></span>
</div>

<style>
    .switch {
        /*
        --slider-size: 75;
        --slider-color: hsla(227, 47%, 96%, 1);
        --unchecked-color: hsla(230, 22%, 74%, 1);
        --checked-color: linear-gradient(225deg, hsla(146, 68%, 55%, 1) 0%, hsla(210, 79%, 56%, 1) 98.02%);
        */

        --calc-size: calc(var(--slider-size, 75) * 1cqmin);
        --size: var(--calc-size, 75cqmin);
        --indent: calc((100cqmin - var(--size)) / 2);

        container: switch / size;
        display: inline-block;
        width: 100%;
        height: 100%;
        cursor: pointer;

        & input[type="checkbox"] {
            display: none;
        }

        & .slider {
            width: 100%;
            height: 100%;
            border-radius: 99999px;
            display: inline-flex;
            align-items: center;
            background: var(--unchecked-color, hsla(230, 22%, 74%, 1));

            &.rotated {
                transform: rotate(180deg);
            }

            &:after {
                content: "";
                display: block;
                height: var(--size);
                width: var(--size);
                transform: translateX(var(--indent));
                border-radius: 99999px;
                background: var(--slider-color, hsla(227, 47%, 96%, 1));
                transition: 0.3s all ease-in-out;
            }

            &:active:after {
                width: calc(100cqw - 100cqmin + var(--size));
            }
        }

        & input[type="checkbox"]:checked + .slider {
            background: var(
                    --checked-color,
                    linear-gradient(
                            225deg,
                            hsla(146, 68%, 55%, 1) 0%,
                            hsla(210, 79%, 56%, 1) 98.02%
                    )
            );

            &:after {
                transform: translateX(calc(100cqw - 100% - var(--indent)));
            }
        }
    }
</style>
