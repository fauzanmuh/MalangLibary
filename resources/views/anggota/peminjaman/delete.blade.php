{{-- !-- Delete Warning Modal -->  --}}
    <form method="post" action="/anggota/pinjam/{{  $pinjam->id }}" id="myForm">
    <div class="modal-body">
        @csrf
        @method('DELETE')
        <h5 class="text-center">Apakah Anda yakin membatalkan peminjaman?</h5>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-danger">Ya, Saya Yakin</button>
    </div>
</form>