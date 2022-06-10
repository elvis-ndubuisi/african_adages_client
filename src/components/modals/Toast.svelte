<script></script>

<section class="toast">
    <h4>
        <slot name="status"></slot>
    </h4>
    <p>
        <slot name="reason"></slot>
    </p>
</section>

<style>
    .toast {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: white;
        z-index: 10;
        min-width: 230px;
        min-height: 100px;
        border: solid 2px black;
    }
</style>