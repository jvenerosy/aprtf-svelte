<script>
    export let text = "Suivant";
</script>

<button class="button">
    {text}
</button>

<style lang="scss">
    @import '../../styles/variables.scss';

    button {
        background-color: $tertiary;
        color: $inverted;
        padding: 10px $gap;
        font-size: $size-regular;
        border: none;

        &:hover {
            background-color: darken($tertiary, 5%);
            color: $inverted;
        }
    }
</style>