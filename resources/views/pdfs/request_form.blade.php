<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PDF Generate</title>

  <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  {{-- <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"> --}}

  <style>
    @page {
      margin: 0px;
    }
    body {
      margin: 0px;
    }
    * {
      /* font-family: Verdana, Arial, sans-serif; */
      font-family: 'Montserrat', sans-serif;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    table {
      font-size: x-small;
    }
    tfoot tr td {
      font-weight: bold;
      font-size: x-small;
    }
    .logo {
      margin-top: 10px;
      margin-left: 10px;
      margin-bottom: 2px;
      height: 20px;
    }
    .header {}
    .sub-header {}
    .information {
      background-color: #7F7F7F;
      color: #FFF;
    }
    .information .header .logo {
      margin: 5px;
    }
    .information table {
      /* padding: 10px; */
    }

    .header table {
      padding: 0 15px;
    }
    .sub-header table {
      padding: 0 15px;
    }
    .form-header table {
      padding: 0 15px;
    }
    .form-justification table {
      padding: 0 15px;
    }
    .form-table table {
      padding: 0 70px;
    }
    .form-signatories table {
      padding: 0 15px;
    }
    .form-remarks table {
      padding: 0 15px;
    }

    #request-items {
      font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    #request-items td, #request-items th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    #request-items tr:nth-child(even){background-color: #f2f2f2;}

    #request-items tr:hover {background-color: #ddd;}

    #request-items th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #4CAF50;
      color: white;
    }
  </style>
</head>
<body>
  <div class="header">
    <table width="100%">
      <tr>
        <td width="50">
          <img 
            src="{{ url('resources/assets/img/isuzu_logo.png') }}" 
            alt="Logo" 
            class="logo"
          />
        </td>
        <td style="padding-left: 15px;">
          <p style="margin-bottom: 5px;">Philippines Corporation</p>
        </td>
      </tr>
    </table>
  </div>

  <div class="sub-header">
    <table width="100%">
      <tr 
        align="center" 
        style="background-color: #3F3F3F; padding: 0px;"
      >
        <td>
          <p style="color: white">RUSH FORM</p>
        </td>
      </tr>
    </table>
  </div>

  <div class="form-header">
    <table width="100%">
      <tr>
        <td width="110">
          <p style="text-align: left"><strong>Requesting Department:</strong></p>
        </td>
        <td>
          <p style="text-align: left">{{ $data->requesting_department }}</p>
        </td>
        <td width="100">
          <p style="text-align: right"><strong>Submission Date:</strong></p>
        </td>
        <td>
          <p style="text-align: left">{{ $data->submission_date }}</p>
        </td>
      </tr>
    </table>
  </div>

  <br>

  <div class="form-table">
    <table id="request-items" width="100%">
      <thead>
        <tr>
          <th>Request Item</th>
          <th>Target Date of Release/Processing</th>
          <th>Request Approver</th>
        </tr>
      </thead>
      <tbody>
        @foreach ($data->items as $item)
            <tr>
              <td>{{ $item->request_item }}</td>
              <td>{{ $item->target_date }}</td>
              <td>{{ $item->approver_type }}</td>
            </tr>
        @endforeach
      </tbody>
    </table>
  </div>

  <br/>

  <div class="form-justification">
    <table width="100%">
      <tr>
        <td>
          <p style="font-size: 14px;">
            <strong>Justification</strong>
            (If the space below is not enough, you may use and attach separate sheet for continuation)
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <div style="border-style: solid; border-width: 1px; height: 150px; width: 100%; padding: 10px;">
            {{ $data->justification }}
          </div>
        </td>
      </tr>
    </table>
  </div>

  <br><br>

  <div class="form-signatories">
    <table width="100%">
      <tr>
        <td>
          <label>Prepared By:</label>
        </td>
        <td>
          Approved By:
        </td>
      </tr>
      <tr>
        <td style="height: 70px;"></td>
      </tr>
      <tr>
        <td>
          {{ $data->prepared_by }}
          <hr style="width: 190px; text-align: left; margin-left: 0 margin-bottom: 0">
        </td>
        <td>
          {{ $data->approved_by }}
          <hr style="width: 190px; text-align: left; margin-left: 0 margin-bottom: 0">
        </td>
      </tr>
      <tr>
        <td>
          Name and Signature
        </td>
        <td>
          Manager Name and Signature
        </td>
      </tr>
    </table>
  </div>

  <br><br>
  <hr style="margin: 0 15px; width: 100%;">
  <br>

  @if ($hasAcct && $hasCss)
    <div class="form-remarks">
      <table width="100%">
        <tr>
          <td>
            <strong>
              For Accounting Section Use
            </strong>
          </td>
          <td>
            <strong>
              For CSS Section Use
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            Remarks:
          </td>
          <td>
            Remarks:
          </td>
        </tr>
        <tr>
          <td style="height: 70px;"></td>
        </tr>
        <tr>
          <td>
            <hr style="width: 190px; text-align: left; margin-left: 0 margin-bottom: 0">
          </td>
          <td>
            <hr style="width: 190px; text-align: left; margin-left: 0 margin-bottom: 0">
          </td>
        </tr>
        <tr>
          <td>
            Approved By:
          </td>
          <td>
            Approved By:
          </td>
        </tr>
      </table>
    </div>
  @elseif ($hasAcct && !$hasCss)
    <div class="form-remarks">
      <table width="100%">
        <tr>
          <td>
            <strong>
              For Accounting Section Use
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            Remarks:
          </td>
        </tr>
        <tr>
          <td style="height: 70px;"></td>
        </tr>
        <tr>
          <td>
            <hr style="width: 190px; text-align: left; margin-left: 0 margin-bottom: 0">
          </td>
        </tr>
        <tr>
          <td>
            Approved By:
          </td>
        </tr>
      </table>
    </div>
  @elseif (!$hasAcct && $hasCss)
    <div class="form-remarks">
      <table width="100%">
        <tr>
          <td>
            <strong>
              For CSS Section Use
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            Remarks:
          </td>
        </tr>
        <tr>
          <td style="height: 70px;"></td>
        </tr>
        <tr>
          <td>
            <hr style="width: 190px; text-align: left; margin-left: 0 margin-bottom: 0">
          </td>
        </tr>
        <tr>
          <td>
            Approved By:
          </td>
        </tr>
      </table>
    </div>
  @endif

  <div class="information" style="position: absolute; bottom: 0;">
    <table width="100%">
      <tr>
        <td align="left" style="width: 50%;">
          &copy; {{ date('Y') }} {{ config('app.url') }} - All rights reserved.
        </td>
        <td align="right" style="width: 50%;">
          Isuzu Philippines Corporation
        </td>
      </tr>
    </table>
  </div>
</body>
</html>