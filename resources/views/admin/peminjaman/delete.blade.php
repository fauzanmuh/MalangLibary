{{-- !-- Delete Warning Modal -->  --}}
    <form method="post" action="/admin/peminjaman/{{  $pinjam->id }}" id="myForm">
    <div class="modal-body">
        @csrf
        @method('DELETE')
        <h5 class="text-center">Anda yakin ingin menghapus data?</h5>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-danger">Ya, Hapus</button>
    </div>
</form>