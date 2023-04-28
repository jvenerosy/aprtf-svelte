<script lang="ts">
    export let text: string = "Suivant";
    export let theme: string = "is-tertiary";
</script>

<button class="button {theme}">
    {text}
</button>

<style lang="scss">
    @import '../../styles/variables.scss';

    button {
        color: $inverted;
        padding: 10px $gap;
        font-size: $size-regular;
        border: none;
        border-radius: 5px;

        &.is-primary {
            background-color: $primary;
            &:hover {
                background-color: darken($primary, 5%);
                color: $inverted;
            }
        }
        &.is-tertiary {
            background-color: $tertiary;
            &:hover {
                background-color: darken($tertiary, 5%);
                color: $inverted;
            }
        }
        &.is-family {
            background-color: $family;
            &:hover {
                background-color: darken($family, 5%);
                color: $inverted;
            }
        }
        
    }
</style>