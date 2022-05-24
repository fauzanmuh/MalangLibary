
<form method="post" action="/petugas/transaksi/perpanjang/{{  $pinjam->id }}" id="myForm">
    <div class="modal-body">
        @csrf
        @method('PUT')
        <h5 class="text-center">Apakah Anda yakin memperpanjang peminjaman?</h5>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-danger">Ya, Saya Yakin</button>
    </div>
</form>